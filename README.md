# EDF Tempo Forecast Web App

This project is a lightweight web application designed to display upcoming EDF Tempo day statuses, allowing users to view daily electricity rate indications. It's optimized for embedding within other interfaces, such as **Home Assistant**, via an iframe.

Note that this website uses [the 'api-couleur-tempo' API developped by Jean-Baptiste Romain](https://www.api-couleur-tempo.fr/) to retrieve the necessary data.

Find all the details of the tempo option offered by EDF [at this URL](https://particulier.edf.fr/fr/accueil/gestion-contrat/options/tempo/details.html)

## Features

- **EDF Tempo Day Forecasts**: Quickly view EDF Tempo statuses for upcoming days.
- **Lightweight and Responsive**: Developed for seamless integration into other dashboards or interfaces.
- **Home Assistant Compatibility**: Can be embedded within Home Assistant’s dashboards as an iframe, making it ideal for smart home energy monitoring.

## How to use

You can whether use [the 'official' instance host at Netlify](https://tempo-days.netlify.app/).

Or host it by yourself :

```bash
git clone https://github.com/your-username/edf-tempo-forecast.git
   ```

## Usage

Once embedded, the application displays EDF Tempo day types for the upcoming days (Blue, White, Red), providing insight into daily electricity rates.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests with improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Truiteseche/edf-tempo-forecast/blob/main/LICENSE) file for details.
