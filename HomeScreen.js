import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Certifique-se de instalar a biblioteca

const palavras = [
  { id: '1', palavra: 'React', definicao: 'Uma biblioteca JavaScript para construir interfaces de usuário.' },
  { id: '2', palavra: 'Native', definicao: 'Tecnologia usada para criar aplicativos móveis nativos.' },
  { id: '3', palavra: 'JavaScript', definicao: 'Uma linguagem de programação amplamente usada para a web.' },
  { id: '4', palavra: 'Node.js', definicao: 'Um ambiente de execução para JavaScript no lado do servidor.' },
  { id: '5', palavra: 'HTML', definicao: 'Linguagem de marcação usada para criar páginas da web.' },
  { id: '6', palavra: 'CSS', definicao: 'Uma linguagem usada para estilizar páginas da web.' },
  { id: '7', palavra: 'API', definicao: 'Interface de Programação de Aplicações, que permite que diferentes softwares se comuniquem.' },
  { id: '8', palavra: 'Git', definicao: 'Um sistema de controle de versão para rastrear mudanças em código-fonte.' },
  { id: '9', palavra: 'Agile', definicao: 'Uma abordagem de gerenciamento de projetos que prioriza a flexibilidade e a colaboração.' },
  { id: '10', palavra: 'UI', definicao: 'Interface do Usuário, o espaço onde interações entre humanos e máquinas ocorrem.' },
  { id: '11', palavra: 'UX', definicao: 'Experiência do Usuário, a percepção que um usuário tem ao interagir com um produto ou serviço.' },
  { id: '12', palavra: 'Framework', definicao: 'Uma estrutura que fornece suporte e soluções para desenvolver aplicações.' },
  { id: '13', palavra: 'Database', definicao: 'Uma coleção estruturada de dados armazenados e acessados eletronicamente.' },
  { id: '14', palavra: 'Front-end', definicao: 'A parte de um aplicativo ou site com a qual os usuários interagem diretamente.' },
  { id: '15', palavra: 'Back-end', definicao: 'A parte de um aplicativo que opera em servidores e gerencia a lógica do aplicativo.' },
  { id: '16', palavra: 'Deployment', definicao: 'O processo de disponibilizar uma aplicação em um ambiente de produção.' },
  { id: '17', palavra: 'Responsive', definicao: 'Uma abordagem de design que permite que um site ou aplicativo funcione em diferentes dispositivos.' },
  { id: '18', palavra: 'Debugging', definicao: 'O processo de encontrar e corrigir erros ou defeitos em um programa.' },
  { id: '19', palavra: 'Version Control', definicao: 'Um sistema que registra mudanças em arquivos ou conjuntos de arquivos ao longo do tempo.' },
  { id: '20', palavra: 'Cloud Computing', definicao: 'O uso de recursos de computação pela internet, como armazenamento e processamento de dados.' },
];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = React.useState('');

  const filteredPalavras = palavras.filter(p =>
    p.palavra.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Definition', { palavra: item })}
    >
      <Text style={styles.palavra}>{item.palavra}</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder="Buscar palavra..."
            value={search}
            onChangeText={text => setSearch(text)}
          />
          <TouchableOpacity onPress={() => setSearch('')} style={styles.clearButton}>
            <Icon name="close-circle" size={24} color="#999" />
          </TouchableOpacity>
        </View>
        {filteredPalavras.length > 0 ? (
          <FlatList
            data={filteredPalavras}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            keyboardShouldPersistTaps="handled"
          />
        ) : (
          <Text style={styles.noResults}>Nenhuma palavra encontrada.</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  search: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  clearButton: {
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  palavra: {
    fontSize: 18,
    color: '#333',
  },
  noResults: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});
