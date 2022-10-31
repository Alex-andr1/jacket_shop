jQuery(function($) { /*выборка из библиотеки */
    $('.registration > li > a').click(function() {/*на ссылке по клику*/
        let $this = $(this);
        let $pop = $this.next('.popup');
        let $close = $pop.children('.close');

        $this.parent().siblings().children('.popup').hide()
        /*родительский/к нескольким/ дестким/       скрыть
          элемент                    (дальним)   */
        $pop.show();/*показать элемент .popup */
        $close.click(function() {
            $pop.hide();
        });
        return false
    });
});