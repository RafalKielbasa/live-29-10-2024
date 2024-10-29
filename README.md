### Szczegółowe wymagania:

1. **Wyświetlanie listy produktów:**

   - Wyświetl listę wszystkich produktów w formie tabeli.
   - Każdy element listy powinien wyświetlać nazwę produktu, kategorię, cenę oraz informację o dostępności.

2. **Filtrowanie produktów:**

   - Dodaj możliwość filtrowania produktów dostępnych w magazynie (`inStock`).

3. **Sortowanie produktów:**

   - Umożliw sortowanie produktów rosnąco lub malejąco według ceny.

4. **Usuwanie elementów tabeli:**

   - Dodaj możliwość usuwania elementów tabeli uprzednio zaznaczonych checkboxem.

5. **Dynamiczne stylowanie za pomocą CSS-in-JS:**
   - Użyj biblioteki CSS-in-JS (**styled-components**) do stylowania komponentów.
   - Użyj tabeli z MUI: [https://mui.com/material-ui/react-table/](https://mui.com/material-ui/react-table/).
   - Produkty, które są niedostępne w magazynie (`inStock === false`), powinny być wyświetlane z półprzezroczystym lub wyszarzonym stylem.
