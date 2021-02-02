/* -------------------------- Custom site JS -------------------------------*/

$(function(){
  // hover dropdown open animation
  $('.nav-item')
    .hover(function(){
      $(this).children('.dropdown-menu').stop().slideDown(250);
    })
    .on('mouseleave', function(){
      $(this).children('.dropdown-menu').stop().slideUp(250);
    });

  // toc and sidebar
  var mainSize = 8;
  $('#sidebarSwitch').click(function(){
    if ($(this).is(':checked')){
      mainSize -= 2;
      $('.td-main .td-sidebar').show();
    } else {
      mainSize += 2;
      $('.td-main .td-sidebar').hide();
    }
    $('body main').attr('class', `col-12 col-md-9 col-xl-${mainSize} pl-md-5`);
  });

  $('#tocSwitch').click(function(){
    if ($(this).is(':checked')){
      mainSize -= 2;
      $('.td-main .td-toc').attr('style','display:block !important');
    } else {
      mainSize += 2;
      $('.td-main .td-toc').attr('style','display:none !important');
    }
    $('body main').attr('class', `col-12 col-md-9 col-xl-${mainSize} pl-md-5`);
  });


});

// insert pagesource button
const driverSource = new Driver();
function hightlightSourceLink(){
  event.stopPropagation();
  driverSource.highlight($('.td-page-meta a:contains("View source code")').get(0));
}
$(function(){
  if ($('.td-page-meta').get(0)) {
    var sourceLink = $('.td-page-meta a:contains("View source code")');
    if ($(".reading-time").get(0)) $(".reading-time").after(sourceLink.clone())
    else $(".td-content h1:first-of-type").after(sourceLink.clone())
  }
});

// highlight toc
$(() => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				$(`nav li a[href="#${id}"]`).parent().addClass('active').trigger('toc-active');
			} else {
				$(`nav li a[href="#${id}"]`).parent().removeClass('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('.td-content *[id]').forEach((section) => {
		observer.observe(section);
	});

  var pageMetaHeight = $('.td-page-meta').height() + 40;
  $('#TableOfContents ul li').on('toc-active', function(){
    console.log($(this).position().top)
    if (this.offsetTop < window.innerHeight/2) return $(".td-toc").scrollTop(0);
    $(".td-toc").scrollTop(this.offsetTop - window.innerHeight/2 - 20);
  });
});
