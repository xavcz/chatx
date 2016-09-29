# ChatX

This app uses Twitter to sign in/up users.
You need to [create a Twitter app and set your own credentials](https://apps.twitter.com/app/new) to make it run. If you run it locally, you should set the callback url to `http://localhost:3000` 😉

Then clone the repo:
```sh
git clone https://github.com/xavcz/chatx.git
```

Edit the `sample_settings.json` file with your credentials:
```json
{
  "consumerKey": "foo",
  "secret": "bar"
}
```

Almost ready, install package depencies:
```sh
npm install
```

Run the app:
```sh
meteor --settings sample_settings.json
```

Have fun 🚀