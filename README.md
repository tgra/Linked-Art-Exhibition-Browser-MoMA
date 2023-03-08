# Linked Art Exhibition Browser - MoMA dataset

This repository contains a static HTML web site that provides an interface to an art exhibition dataset published by the Museum of Modern Art, New York (MoMA).

The following image below is linked to a Youtube video demonstrating various features of the Linked Art Exhibition Browser.

[![Youtube video of the Exhibition Browser](https://img.youtube.com/vi/93pVD9LQ_9k/0.jpg)](https://www.youtube.com/watch?v=93pVD9LQ_9k)


## Dataset
The dataset consists of records describing art exhibitions carried out by MoMA and non-MoMA organisations, and includes information about the time and location of the exhibitions as well as the people involved in those exhibitions.

The dataset uses the Linked Art semantic data model to describe exhibitions and is serialized as JSON_LD.

## Data analysis
The Graphical User Interface (GUI) has been defined further to a data analysis exercise using a Linked Art data analysis app available at https://github.com/tgra/Linked-Art-Exhibition-Browser-Data-Analysis

The data analysis looked at the 'shape' of the data, that is the distribution over values for certain data properties. One objective was to identify properties of the data that had a fairly even distribution across a range of values, and where the maximum number for a given value did not exceed that which could be presented on a single page without a need for paging through results.


## Data entry points
The data analysis led to the identification of a number of data entry points into the dataset that are listed on the Exhibition Browser homepage, that link to dedicated pages where a concertina widget is used to present the summary information.

## Data journeys
As well as different entry points for subsets of the data, the data analysis also identified different journeys through the data. These all eventually lead to the detailed exhibition pages.

## In page summary data
As well as entry points and data journeys, the data analysis also informed the presentation of the summary information for a selected person or exhibition. 

### Examples

#### An artist's list of exhibitions 
Decades were identified as a good way to partition and present a person's exhibition list.

#### Concurrent exhibitions
Organisations were identified as a good way to partition and present lists of concurrent exhibitions.

## Web site creation
The web site has been created as static HTML files using the Linked Art Exhibition Browser web app, available at https://github.com/tgra/Linked-Art-Exhibition-Browser.

## How to view web site

Two methods for viewing the web site:
### GitHub Pages 
visit https://tgra.github.io/Linked-Art-Exhibition-Browser-MoMA/

### locally
 1. download the repository into a directory, as a subdirectory e.g. /dir/Linked-Art-Exhibition-Browser-MoMA
 2. use the command `http-server` in the root directory i.e. /dir/ 
 3. navigate to http://localhost:xxxx/Linked-Art-Exhibition-Browser-MoMA


## Links

- Linked Art https://linked.art/
- Museum of Modern Art, New York https://www.moma.org/
