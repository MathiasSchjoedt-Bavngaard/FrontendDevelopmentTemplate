using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace Debt_Book.Views
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();  
        }
        
        private void colorSelector_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            ComboBoxItem selectedItem = (ComboBoxItem)colorSelector.SelectedItem;
            face.Fill = new SolidColorBrush((Color)ColorConverter.ConvertFromString(selectedItem.Content.ToString()));
        }

    }


}
