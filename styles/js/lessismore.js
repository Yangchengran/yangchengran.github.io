/*!
 * Adapted from Bootstrap docs JavaScript
 */


!function ($) {

  $(function () {
      
		orderTheLeftNavigations();

    function orderTheLeftNavigations(){
	    $('#navigation .sidenav').html($("#markdown-toc").html());
	    $('#navigation .sidenav ul').addClass("nav");
	    $("#markdown-toc").remove();

      // 添加Bootstrap表格样式 table-hover 
      $(".docs-content table").addClass("table table-hover");
  	}

  	$(window).load(initilizeAfterLoad);

    function initilizeAfterLoad(){
      repairTheImagesWhichCrossTheMaxWidth();
      resetHeadersStyles();
    }

    // 重新计算图片显示大小。
  	function repairTheImagesWhichCrossTheMaxWidth(){
  		var images = $(".docs-content img");
      var panelWidth = $(".docs-content")[0].childNodes[1].clientWidth;
  		if(images != undefined && images.length > 0){
  			for(var i=0; i< images.length;i++){
  				var imgWidth = images[i].width;
  				if( imgWidth >= panelWidth ){
  					 images[i].width = panelWidth;
  				}
  			}
  		}
  	}

    // 设置标题样式
    function resetHeadersStyles(){
      resetHeaderItemStyles($(".docs-content h1"));
      resetHeaderItemStyles($(".docs-content h2"));
      resetHeaderItemStyles($(".docs-content h3"));
    }

    function resetHeaderItemStyles(headers){
      if(headers != undefined && headers.length > 0){
        for(var i=0; i< headers.length;i++){
          
          var header = headers[i];
          $(header).html($(header).html() + '<span class="anchor-target" id="' + header.id + '"></span>' +
            '<a href="#' + header.id + '" name="' + header.id + '" class="anchor glyphicon glyphicon-link"></a>');
          $(header).removeAttr('id');
        }
      }
    }
  })

}(jQuery)
