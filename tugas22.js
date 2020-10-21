function panggilForEach(){
  kal="Saya ingin belajar bersama";
  var data = kal.split(" ");
  data.forEach(function(item, i) {
    console.log("Item : ", item, " Index ke ", i);
  });
}
panggilForEach()
