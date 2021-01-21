# OF Exercise

This exercise utilizes typescript, but otherwise is almost a 100% vanilla react-native app.

This uses data from https://jsonplaceholder.typicode.com mock api.

## Usage

- Fork the repo
- Install dependencies
- `yarn start`
- In the web interface that will open afterwards - run on a simulator of your choosing
- Push the fork to submit the results

## Tasks

- Add an ability to move between users from the mock api using the arrows on screen
- Load a list of posts made by user

## Bonus points

- Loading placeholders of any kind.
- Ability to navigate to post screen when tapping on post
  - Post screen contains the original post info on the top and a list of comments below.
  - User should be able to go back to  the user they were browsing by tapping a back button in the top left corner of the screen.
- Sharing post styles between the post item in the main user screen and the post screen.
- Sharing the post response typings between main user screen and the post screen.
- Usage of reselect library.
- Refactor the Home component to use hooks for Redux instead of connect
  
Have fun :)
