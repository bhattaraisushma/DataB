# Data Bridges

Data Bridges is a platform designed to visualize spatial data and explore datasets from multiple sources. Our project serves as a bridge for data from diverse international agencies, offering users a centralized platform to easily query and access space and Earth weather data while ensuring complete transparency regarding data sources. We enhance the user experience by utilizing QGIS for spatial data visualization, presenting Earth weather parameters in an engaging and informative manner. By simplifying access to complex information and enabling users to visualize the interplay between space and Earth weather, our project plays a vital role in raising public awareness about the importance of understanding these dynamic phenomena in today's interconnected world.

## Overview

Data Bridges is a web platform that aggregates data from various sources, including NASA and other scientific organizations. It gathers information about space weather, such as solar wind, and regular Earth weather parameters, such as temperature and humidity. Additionally, it provides visualization tools for Nepal's geographical data.

## How It Works

To use Data Bridges, all you need is a computer and an internet connection. You access the website and use it to search for specific data or view visualizations on maps.

### Data Collection

We utilize APIs from data.gov and the Canadian Space Agency to unify data from various agencies and their datasets on a single platform. User search queries are processed through these APIs to provide relevant merged data. We create a user-friendly platform using Next.js and FAST API, with UI enhancements using Tailwind CSS.

### Data Visualization

We begin by familiarizing ourselves with various satellites like GPM-IMERG and SADIS and their data. We then collect and process this data based on year, longitude, and latitude. The processed CSV data is converted into GeoJSON and then into SHP (shapefile) format. ArcMap is used for interpolation, and MapLibre is employed to create historical maps for temperature and pressure.

## Future Plans (Version 2)

For Version 2 of this project, we plan to implement advanced data filters to refine data searches, provide real-time updates for timely information, and establish a user community for better collaboration. Additionally, we aim to introduce customized data visualization tools, enabling users to create tailored charts and maps. These features will further enhance the accessibility and utility of Data Bridges.

## References

**Web App:**

- Frontend: Next.js
- Styling: Tailwind CSS
- Backend: FAST API

**Map Visualization:**

- Data Processing: Python
- Interpolation: ArcMap
- Map Visualization: MapLibre


## Contributers
* [Kirtan Kunwar](https://github.com/kiyotone)
* [Navin Nepal](https://github.com/marconn01)
* [Nikita Kunwor](https://github.com/Nikita0728)
* [Prashant Aryal](https://github.com/pr-a-sh-ant)
* [Prateek Poudel](https://github.com/Prateek61)
* [Sushma Bhhattarai](https://github.com/bhattaraisushma)
