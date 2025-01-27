import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import styles from '../styles/QuizInterativoStyles';
import { useTheme } from '../ThemeContext';

const QuizInterativo = ({ navigation }) => {
  const questions = [
    {
      question: 'Qual é a capital da França?',
      options: ['Paris', 'Londres', 'Berlim'],
      answer: 'Paris',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
    },
    {
      question: 'Qual é o maior oceano do mundo?',
      options: ['Atlântico', 'Pacífico', 'Índico'],
      answer: 'Pacífico',
      image: 'https://thumbs.dreamstime.com/z/mapa-pol%C3%ADtico-do-oceano-pac%C3%ADfico-e-batimetria-detalhado-vetor-ilustra%C3%A7%C3%A3o-vetorial-163501223.jpg',
    },
    {
      question: 'Quantos continentes existem?',
      options: ['5', '6', '7'],
      answer: '6',
      image: 'https://static.todamateria.com.br/upload/ma/pa/mapamundilinhasimaginarias-cke.jpg',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const { isDarkMode } = useTheme();
  
  // Função para manipular a resposta e mostrar feedback
  const handleAnswer = (selectedOption) => {
    const correct = selectedOption === questions[currentQuestion].answer;
    setFeedback(correct ? 'Correto!' : `Errado! A resposta era ${questions[currentQuestion].answer}`);
    if (correct) setScore(score + 1);
    setShowModal(true);
  };

  // Função para avançar para a próxima pergunta ou reiniciar o quiz
  const handleNextQuestion = () => {
    setShowModal(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finalizado! Sua pontuação: ${score}/${questions.length}`);
      setCurrentQuestion(0);
      setScore(0);

      navigation.navigate('Home');
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Image
        source={{ uri: questions[currentQuestion].image }}
        style={styles.questionImage}
      />
      <Text style={[styles.question, isDarkMode && styles.darkText]}>
        {questions[currentQuestion].question}
      </Text>
      {questions[currentQuestion].options.map((option, index) => (
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, isDarkMode && styles.darkButton]}
            onPress={() => handleAnswer(option)}
          >
            <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText]}>
              {option}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={[styles.modalContainer, isDarkMode && styles.darkModalContainer]}>
          <View style={[styles.modalContent, isDarkMode && styles.darkModalContent]}>
            <Text style={[styles.modalText, isDarkMode && styles.darkModalText]}>
              {feedback}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, isDarkMode && styles.darkButton]}
                onPress={handleNextQuestion}
              >
                <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText]}>
                  Próxima
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QuizInterativo;