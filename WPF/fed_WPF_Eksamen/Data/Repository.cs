using System.Collections.ObjectModel;
using System.IO;
using System.Xml.Serialization;
using fed_WPF_Eksamen.Model;


namespace fed_WPF_Eksamen.Data
{
    // Serializer metoderne herunder er taget fra agent assignment 4 løsningen.
    // https://brightspace.au.dk/d2l/le/lessons/54785/topics/816823 
    public class Repository
    {
        internal static ObservableCollection<Class1> ReadFile(string fileName)
        {
            // XmlSerializer kan serialize og de-serialize
            // Create an instance of the XmlSerializer class and specify the type of object to deserialize.
            XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<Class1>)); 
            TextReader reader = new StreamReader(fileName); // TextReader er en abstrakt klasse som StreamReader nedarver fra
            // Deserialize all the debtors. 
            var Class1s = (ObservableCollection<Class1>)serializer.Deserialize(reader);
            reader.Close();
            return Class1s;
        }
        internal static void SaveFile(string fileName, ObservableCollection<Class1> Class1s)
        {
            // Create an instance of the XmlSerializer class and specify the type of object to serialize.
            XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<Class1>));
            TextWriter writer = new StreamWriter(fileName);
            // Serialize all the agents.
            serializer.Serialize(writer, Class1s);
            writer.Close(); // Lukker filen
        }

    }
}
