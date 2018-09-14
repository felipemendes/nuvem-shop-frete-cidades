> Versão em português
# Nuvem Shop - Frete manual por cidades

Extensão do Chrome para adicionar todas as cidades do estado selecionado em Frete Manual no painel Nuvem.

Quando o cliente calcula um frete pela Nuvem Shop todas as configurações de fretes manuais para o estado/cidade são exibidas. Esse comportamento não permite o cliente visualizar apenas o frete configurado para a cidade de destino e sim, o frete também configurado para o estado.

Dessa maneira, se houver a necessidade de criar um frete manual para o estado e outro filtrado por cidades não é possível limitar o que o cliente visualizará, pois ambos estarão visíveis.

A alternativa orientada pelos atendentes da Nuvem Shop, para este caso, é criar configurações de frete apenas por cidades. Por padrão, se não marcar nenhuma cidade todas já estarão inclusas, porém não é possível fazer a remoção.

Portanto, esta extensão possibilita marcar todas as cidades para facilitar a remoção, visto que em estados com um grande volume de cidades é muito trabalhoso adicionar todas as opções manualmente.

![screen-1](/screenshots/screen-1.png "screen-1")
![screen-2](/screenshots/screen-2.png "screen-2")

## Melhorias
Utilizar os scripts do próprio painel para evitar a importação de bibliotecas externas.

## Instalação

Instale através da Chrome Web Store: [Nuvem Shop - Frete manual por cidades](https://chrome.google.com/webstore/detail/nuvem-shop-frete-manual-p/pdegncemdjbjhjbgbdigdljdpookkcoi)

ou 

1. Clone o repositório
```
$ git clone https://github.com/felipemendes/nuvem-shop-frete-cidades
```
2. Vá para chrome://extensions/ e marque a caixa do modo de desenvolvedor no canto superior direito
3. Ainda na página chrome://extensions/ e clique no botão `Carregar sem compactação` e selecione o repositório
4. O ícone da Nuvem Shop será adicionado à barra de ferramentas

## Uso
1. Acesse a configuração de frete manual do painel Nuvem Shop
2. Selecione `Limitar esta opção segundo peso, preço e/ou região.`
3. Selecione um estado
4. Clique no ícone da extensão na barra de ferramentas
5. Um novo campo será exibido abaixo do estado, basta marcá-lo e clicar em `Adicionar` ou `Salvar alterações`

## Script
Script em jQuery usado para gerar o checkbox e selecionar as cidades, caso não queria instalar a extensão.

```javascript
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
```

> Versión en español
# Tienda Nube flete manual por ciudades

Extensión de Chrome para agregar todas las ciudades del estado seleccionado en el envío manual en el panel Nube.

Cuando el cliente calcula un flete por la nube de compras, todas las configuraciones de fletes manuales para el estado / ciudad se muestran. Este comportamiento no permite al cliente ver sólo el flete configurado para la ciudad de destino y sí, el flete también configurado para el estado.

De esta manera, si hay la necesidad de crear un flete manual para el estado y otro filtrado por ciudades no es posible limitar lo que el cliente visualizará, pues ambos estarán visibles.

La alternativa orientada por los asistentes de la Tienda Nube, para este caso, es crear configuraciones de flete sólo por ciudades. De forma predeterminada, si no marca ninguna ciudad, ya se incluirán, pero no es posible hacer la remoción.

Por lo tanto, esta extensión permite marcar todas las ciudades para facilitar la remoción, ya que en estados con un gran volumen de ciudades es muy laborioso añadir todas las opciones manualmente.

## Mejoras
Utilizar las secuencias de comandos del propio panel para evitar la importación de bibliotecas externas.

## Instalación

Instalar a través de Chrome Web Store: [Nuvem Shop - Frete manual por cidades](https://chrome.google.com/webstore/detail/nuvem-shop-frete-manual-p/pdegncemdjbjhjbgbdigdljdpookkcoi)

ou 

1. Clone el repositorio
```
$ git clone https://github.com/felipemendes/nuvem-shop-frete-cidades
```
2. Vaya a chrome://extensions/ y marque la caja del modo de desarrollador en la esquina superior derecha
3. En la página chrome://extensions/ y haga clic en el botón `Cargar sin comprimir` y seleccione el repositorio
4. El icono de Tienda Nube se agregará a la barra de herramientas

## Uso
1. Acceda a la configuración de flete manual del panel Tienda Nube
2. Seleccione `Limitar esta opción según peso, precio y/o región.`
3. Seleccione un estado
4. Haga clic en el icono de extensión de la barra de herramientas
5. Un nuevo campo se muestra debajo del estado, simplemente marque y haga clic en `Agregar` o `Guardar`

## Script
Script en jQuery utilizado para generar el checkbox y seleccionar las ciudades, si no quería instalar la extensión.

```javascript
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
```