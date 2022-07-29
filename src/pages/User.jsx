import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";

import GithubContext from "../context/github/GithubContext";
import Spinner from "../components/layout/Spinner";

function User() {
  const params = useParams();
  const { user, getUser, loading } = useContext(GithubContext);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
    email,
  } = user;

  console.log(user);

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            &larr; Back To Search
          </Link>
        </div>

        {/* Image */}
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className=" shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
              {/* <div class="mockup-code">
  
  <pre data-prefix=">" class="text-warning  mb-0"><code>{name}</code></pre> 
  <pre data-prefix=">" class="text-success flex-grow-0"><code>@{login}</code></pre>
</div> */}
                <h2 className="card-title mb-0">{name}</h2>
                <p className="flex-grow-0">@{login}</p>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title ">
                {name}
                <div className="ml-2 mr-1 badge badge-primary">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-success">Hireable</div>
                )}
              </h1>
              <p>{email}</p>

              <p className="mt-2">{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            {/* Informations */}
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {company && (
                <div className="stat">
                  <div className="stat-title text-md">Company Name</div>
                  <div className="text-lg stat-value">{company}</div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Stats */}

        <div class="stats shadow rounded-lg shadow-md bg-base-100 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div class="stat place-items-center">
              <div class="stat-title">Followers</div>
              <div
                class="stat-value"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaUsers
                  className="text-2xl "
                  style={{ marginTop: "5px", marginRight: "7px" }}
                />{" "}
                {followers}
              </div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Following</div>
              <div
                class="stat-value "
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaUserFriends
                  className="text-2xl"
                  style={{ marginTop: "5px", marginRight: "7px"}}
                />
                {following}
              </div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Public Repos</div>
              <div
                class="stat-value "
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaCodepen
                  className="text-2xl"
                  style={{ marginTop: "5px", marginRight: "7px" }}
                />
                {public_repos}
              </div>
            </div>
            <div class="stat place-items-center">
              <div class="stat-title">Public Gists</div>
              <div
                class="stat-value"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaStore
                  className="text-2xl"
                  style={{ marginTop: "5px", marginRight: "7px" }}
                />
                {public_gists}
              </div>
            </div>
          </div>
        </div>
        {/* <RepoList repos={repos} /> */}
      </div>
    </>
  );
}

export default User;
