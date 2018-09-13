$(".city-placeholder .province-row label").append('<label class="checkboxLabel">Todas as cidades<input type="checkbox" class="input-checkbox"><span class="checkmark"></span></label>');

$(".province-row").each(function (index) {
    var idCidade = "#" + $(this).attr('id');
    $(idCidade).click(function () {

        if ($(idCidade + " .input-checkbox").is(':checked')) {
            $(idCidade + " select > option").prop("selected", "selected");
            $(idCidade + " select").trigger("change");
        } else {
            $(idCidade + " select > option").removeAttr("selected");
            $(idCidade + " select").trigger("change");
        }

    });

});