using System;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.IO;
using System.Windows;
using System.Windows.Media;
using System.Windows.Threading;
using Microsoft.Win32;
using Prism.Commands;
using Prism.Mvvm;

namespace Debt_Book.ViewModels
{
    public class MainWindowViewModel: BindableBase
    {
        string filePath = "";
        private readonly string AppTitle = "Gruppe 22 Assignment";

        public MainWindowViewModel()
        {
           // Debtors = new ObservableCollection<SomeClas>();
        }
        

        #region Properties

      


        private bool dirty = false;
        public bool Dirty
        {
            get { return dirty; }
            set
            {
                SetProperty(ref dirty, value);
                RaisePropertyChanged("Title");
            }
        }
        
        public string Title
        {
            get
            {
                var s = "";
                if (Dirty)
                    s = "*";
                return Filename + s + " - " + AppTitle;
            }
        }

        private string filename = "";
        public string Filename
        {
            get { return filename; }
            set
            {
                SetProperty(ref filename, value);
                RaisePropertyChanged("Title");
            }
        }


        #endregion

        #region Commands

         #region FileHandling

        // *********************** New FILE ********************** //

        private DelegateCommand _newFileCommand;
        public DelegateCommand NewFileCommand =>
            _newFileCommand ?? (_newFileCommand = new DelegateCommand(ExecuteNewFile));
        private void ExecuteNewFile()
        {
            MessageBoxResult res = MessageBox.Show(
                    "Any unsaved data will be lost. bom bom Bom  Are you sure you want to initiate a new file?", "Warning",
                    MessageBoxButton.YesNo, MessageBoxImage.Question, MessageBoxResult.No);

            if (res == MessageBoxResult.Yes)
            {
               // Debtors.Clear();
                Filename = "";
                Dirty = false;
            }
        }

        // *********************** OPEN FILE ********************** //

        private DelegateCommand _openFileCommand;
        public DelegateCommand OpenFileCommand =>
            _openFileCommand ?? (_openFileCommand = new DelegateCommand(ExecuteOpenFile));
        private void ExecuteOpenFile()
        {
            var dialog = new OpenFileDialog // Vi får standard OpenFile popup for at vælge en fil
            {
                Filter = "Debtor documents|*.dbt|All Files|*.*",  // Viser kun .agn filer.
                DefaultExt = "dbt"
            };

            dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);

            if (dialog.ShowDialog(Application.Current.MainWindow) == true)
            {

                filePath = dialog.FileName;
                Filename = Path.GetFileName(filePath);
                try
                {
                   // Debtors = Repository.ReadFile(filePath);
                    Dirty = false;
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, "Unable to open file", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        // *********************** SAVE FILE ********************** //

        private DelegateCommand _saveFileCommand;
        public DelegateCommand SaveFileCommand =>
            _saveFileCommand ?? (_saveFileCommand = new DelegateCommand(ExecuteSaveFile, CanExecuteSaveFile));
           // .ObservesProperty((() => Debtors.Count));
        private void ExecuteSaveFile()
        {
            SaveFile();
        }

        private bool CanExecuteSaveFile()
        {
            return (filename != "") ;
            //&& (Debtors.Count > 0)
        }

        private void SaveFile()
        {
            try
            {
               // Repository.SaveFile(filePath, Debtors);
                Dirty = false;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Unable to save file", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        // *********************** SAVEAS FILE ********************** //

        DelegateCommand _saveAsCommand;
        public DelegateCommand SaveAsCommand
        {
            get { return _saveAsCommand ?? (_saveAsCommand = new DelegateCommand(SaveAsCommand_Execute)); }
        }

        private void SaveAsCommand_Execute()
        {
            var dialog = new SaveFileDialog
            {
                Filter = "Debtor documents|*.dbt|All Files|*.*",
                DefaultExt = "dbt"
            };
            if (filePath == "")
                dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
            else
                dialog.InitialDirectory = Path.GetDirectoryName(filePath);

            if (dialog.ShowDialog(Application.Current.MainWindow) == true)
            {
                filePath = dialog.FileName;
                Filename = Path.GetFileName(filePath);
                SaveFile();
            }
        }

        // *********************** CLOSE COMMAND ********************** //


        DelegateCommand<CancelEventArgs> _closingCommand;
        public DelegateCommand<CancelEventArgs> ClosingCommand
        {
            get
            {
                return _closingCommand ?? (_closingCommand = new
                    DelegateCommand<CancelEventArgs>(ClosingCommand_Execute));
            }
        }

        private void ClosingCommand_Execute(CancelEventArgs arg)
        {
            if (Dirty)
                arg.Cancel = UserRegrets();
        }

        private bool UserRegrets()
        {
            var regret = false;
            MessageBoxResult res = MessageBox.Show("You have unsaved data. Are you sure you want to close the application without saving data first?",
                "Warning", MessageBoxButton.YesNo, MessageBoxImage.Question, MessageBoxResult.No);
            if (res == MessageBoxResult.No)
            {
                regret = true;
            }
            return regret;
        }


        #endregion

         #region Basics
        // *********************** DETAILS VIEW ********************** //

        

        // *********************** ADD NEW ********************** //

       


         // *********************** CLOSE APP ********************** //

         private DelegateCommand _closeAppCommand;
         public DelegateCommand CloseAppCommand =>
             _closeAppCommand ?? (_closeAppCommand = new DelegateCommand(ExecuteCloseApp));
        
         void ExecuteCloseApp()
         {
             Application.Current.MainWindow.Close();
         }

        #endregion

       
        #endregion

    }
}
