import { Styledbackground, StyledTitle, StyledText } from './HomePage.styled';

const HomePage = () => {
  return (
    <Styledbackground>
      <StyledTitle>Carsharing</StyledTitle>
      <StyledText>
        Автопрокат Carsharing працює для вас кожен день без вихідних. Ми здаємо
        в оренду тільки справні і надійні автомобілі, які систематично проходять
        технічний огляд.
      </StyledText>
    </Styledbackground>
  );
};

export default HomePage;
