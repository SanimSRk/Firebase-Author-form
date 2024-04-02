import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SingUp = () => {
  const { createUsers, singinGoogle, gitHubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handileClackSingUp = e => {
    e.preventDefault();
    const names = e.target.name.value;
    const email = e.target.email.value;
    const pasword = e.target.password.value;
    console.log(email, pasword, names);
    createUsers(email, pasword)
      .then(res => {
        console.log(res.user);
        e.target.reset();
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handilClickGoogle = () => {
    singinGoogle()
      .then(res => {
        console.log(res.user);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handileClickGithub = () => {
    gitHubLogin()
      .then(res => {
        console.log(res.user);

        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handileClackSingUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Registration"
                />
              </div>
            </form>
            <p className=" text-xl font-semibold text-center">
              Alredy account? please
              <Link to={'/login'}>
                <button className="btn btn-active btn-link text-xl">
                  Login now{' '}
                </button>
              </Link>
            </p>
            <div className=" flex gap-4">
              <p className="mb-4 ">
                <button onClick={handilClickGoogle} className="btn ml-2 ">
                  Google
                </button>
              </p>
              <p className="mb-4 ">
                <button onClick={handileClickGithub} className="btn ml-2 ">
                  GitHub
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
