import CharactersList from './Character/List';
import Layout from './Layout';
import { useCharacters } from '../hooks/characters';

function HomePage() {
  const { loading, error, data: characters } = useCharacters();

  if (loading) {
    return (
      <Layout title="JavaScript API Challenge">
        <CharactersList
          loading={loading}
        />
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout title="Error" />
    );
  }

  return (
    <Layout title="JavaScript API Challenge">
      <CharactersList
        loading={loading}
        characters={characters}
      />
    </Layout>
  );
}

export default HomePage;
