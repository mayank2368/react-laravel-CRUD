# Laravel React Example Full Stack Application
Example Application build with Laravel and React

## Installation 
Make sure you have the environment set up properly. The project contains the following:-

-----Laravel Framework 10.31.0
-----PHP 8.2.12
-----Composer 2.6.5
-----React 18.2.0
-----Node.js 20.5.0
-----Vite 4.0.0


1. Download the project (or clone using GIT).
2. Copy .env.example into .env and configure database credentials and use sqlite for simplicity.
3. Navigate to the project's root directory using terminal.
4. Run `composer install`.
5. Set the encryption key by executing `php artisan key:generate --ansi`.
6. Run migrations `php artisan migrate --seed`.
7. Start the local server by executing `php artisan serve`.
8. Open a new terminal and navigate to the `react` folder.
9. Copy `react/.env.example` into `.env` and adjust the `VITE_API_BASE_URL` parameter.
10. Run `npm install`.
11. Run `npm run dev` to start the vite server for React.
