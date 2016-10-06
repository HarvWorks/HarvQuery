(function (window, document, undefined) {
    function $Harv(element){
        this.click = function(func){document.getElementById(element).addEventListener('click', function (e) {
            func();
            return this;
        });};
        this.hover = function(func1, func2){
            document.getElementById(element).addEventListener('mouseover', function (e) {
                func1();
                return this;
            });
            if(func2){
                document.getElementById(element).addEventListener('mouseout', function (e) {
                    func2();
                    return this;
                });
            }
        };
        return this.self;
    }
    window.$Harv = $Harv;
    document.$Harv = $Harv;
})(window, document);
