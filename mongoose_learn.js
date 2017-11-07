var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students')

// 三步走，Schema注册，相当于约法三章
var Schema = mongoose.Schema;
var movies = new Schema({
  name: String,
  sexy: String
})
mongoose.model('movies', movies);

// 正式交往
// 增加数据
var Student = mongoose.model('movies');
var student = new Student();
student.name = '珠海-江明';
student.sexy = 'man';
student.save(function(err){
  if(err){
    console.log(err);
    return;
  }else{
    console.log('Student is saved.')
    mongoose.disconnect();
  }
})

// 查询数据
// var Student = mongoose.model('Student');
// Student.find({ }, function(err, students){
//   console.log(students)
// });

// 更改数据
// var Student = mongoose.model('Student');
// Student.update({_id: '58779018bc967e1d84222f99'},{sexy: 'man'},{multi: false}, function(err, row_updated){
//   if(err){
//     console.log(err);
//     return;
//   }else{
//     console.log(row_updated)
//   }
// })

// 删除数据
// var Student = mongoose.model('Student');
// Student.findById('58779018bc967e1d84222f99', function(err, student){
//   console.log(student);
//   student.remove();
// })
