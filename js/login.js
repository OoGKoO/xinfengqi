layui.config({
    base: '../modules/' //你存放新模块的目录，注意，不是layui的模块目录
}).use('index',function(){
  var  form=layui.form;
  form.on('submit(formsubmit)', function(data){
    var fdata=JSON.stringify(data.field);
    console.log(fdata);
    return false;
  });
  //自定义验证规则
  form.verify({
    username: [
      /^[\S]{5,12}$/
      ,'用户名必须5到12位，且不能出现空格'
    ],
    password: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ]
  });
});