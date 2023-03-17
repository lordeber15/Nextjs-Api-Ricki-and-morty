import { useRouter } from 'next/router';
import Profile from './Character/Profile';
import Layout from './Layout';
import CharactersList from './Character/List';
import { useCharacter } from '../hooks/characters';

function ProfilePage() {
  const router = useRouter();
  const id = router.query?.id;
  const { loading, error, data: character } = useCharacter(id);

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
    <Layout title={`JavaScript API Challenge | ${character.name ?? ''}`}>
      <Profile
        loading={loading}
        name={character.name}
        image={character.image}
        status={character.status}
        gender={character.gender}
        origin={character.origin}
      />
    </Layout>
  );
}

export default ProfilePage;
