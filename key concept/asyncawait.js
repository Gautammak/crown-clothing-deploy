fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => Response.json())
  .then((users) => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      " https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );
  })
  .then((Response) => Response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));

const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log(secondUser);
    const postResponse = fetch(
      "https://jsonplaceholder.typice.com/posts?userId=" + secondUser.id
    );

    const posts = await postResponse.json();
    console.log(posts);
  } catch (err) {
    console.log("there was an error");
  }
};
