import SavedMovies from '../components/SavedMovies';
import Watchlist from '../components/Watchlist';

function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="h-[400px] w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/d8882814-21a8-42c5-b864-81c071729c2c/CA-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="fixed left-0 top-0 h-[550px] w-full bg-black/60"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl font-bold md:text-5xl">Watchlist</h1>
        </div>
      </div>
      {/* <SavedMovies /> */}
      <Watchlist />
    </>
  );
}

export default Account;
