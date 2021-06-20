const mongoose = require("mongoose");

module.exports = {
  connect: () => {
    const DB_HOST =
      "mongodb+srv://admin:Fengyuesong1120@cluster0.o6hub.mongodb.net/api?retryWrites=true&w=majority";
    mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.on("error", (err) =>
      console.log("数据库连接失败：" + err)
    );
    mongoose.connection.on("open", () => console.log("数据库连接成功！"));
  },
  close: () => mongoose.connection.close(),
};
