# Shopify Inventory Tracker for Intern Challenge Summer 2022

## Assigned task

Build inventory tracking web application

## Requirements

- Create inventory items
- Edit inventory items
- Delete inventory items
- View inventory items
- Any of these wow factors:
  + Export product data to CSV
  + Allow **image** uploads and store image with generated thumbnails
  + When **deleting**, allow deletion comments and undeletion
  + **Filtering** based on fields/inventory count/tags/other metadata
  + **Named collection**: Allow assign/remove inventory items
  + **Warehouses/locations**: Allow creation of warehouses and assign inventory to specific locations
  + **Shipment**: Allow ability to create shipments and assign inventory to shipments
  + **Metrics**: Generate a report on inventory leels over time (most in-stock, out-of-stock last month)

## Steps to setup and interact

## Architecture

There are 3 components:
- Backend: The actual working of the service
- Controller: Provides interface to end-user (customer, APIs,...)
- Frontend: Provides necessary components to render webpages to access Backend services (Can be thought of as CDN)

Each architecture is contained in Docker containers. This is to help scaling up with more users.

### Backend

#### Database

MongoDB

#### View

Simple view that lists all inventory items and their fields
