const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let posts = ["Post 1", "Post 2", "Post 3", "Post 4"];

const listPosts = () => {
  posts.forEach((post) => {
    console.log(post);
  });
};

const exitProg = (msg) => {
  console.log(msg);
  process.exit(0)
}

const displayInterface = () => {
  readline.question("Yeni postunuzu giriniz: ", (post) => {
    posts.push(post);
    listPosts();
    // readline.close();
    readline.question(
      "Başka post eklemek istiyor musunuz (evet, hayır)? ",
      (tekrar) => {
        tekrar == "evet" ? displayInterface() : exitProg("Güle güle");
      }
    );
  });
};


displayInterface();
