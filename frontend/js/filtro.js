(function(){
  $(document).ready(function(){
      $(".btn-menu").click(function(e){
          e.preventDefault();
      var filtro= $(this).attr("data-filter");


      if (filtro=="todos") {
          $(".box-img").show();
          
      }else{
          $(".box-img").not("."+filtro).hide();
          $(".box-img").filter("."+filtro).show();
      }

      });
      $("ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
      });
  });
}());