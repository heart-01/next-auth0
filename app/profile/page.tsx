import { IProfile } from "@/model/IProfile";
import { getSession } from "@auth0/nextjs-auth0";

type Props = {};

const Profile = async ({}: Props): Promise<JSX.Element> => {
  const { user } = (await getSession()) as { user: IProfile };

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    )
  );
};

export default Profile;
