#API

## POST /api/addIngredient

Creates a new Ingredient.

### Parameters Body

| Name                   | Type   | Description              |
| ---------------------- | ------ | ------------------------ |
| ingredient_category    | Int    | FK Required.             |
| name                   | String | min(3) max(50) Required. |
| calories               | Int    | Required.                |
| price                  | number | 2 decimal Required.      |
| ingredient_photo       | String | Required.                |
| ingredient_description | String | Required.                |

### Response

| Name                   | Type   |
| ---------------------- | ------ |
| id                     | PM Int |
| ingredient_category    | Int    |
| name                   | String |
| calories               | Int    |
| price                  | number |
| ingredient_photo       | String |
| ingredient_description | String |

## GET /api/getIngredientById/:id

### Parameters PARAM

id

### Response

| Name                   | Type   |
| ---------------------- | ------ |
| id                     | PM Int |
| ingredient_category    | Int    |
| name                   | String |
| calories               | Int    |
| price                  | number |
| ingredient_photo       | String |
| ingredient_description | String |

## GET /api/getIngredientByName

### Parameters Body

| Name | Type            |
| ---- | --------------- |
| name | String Required |

### Response

| Name                   | Type   |
| ---------------------- | ------ |
| id                     | PM Int |
| ingredient_category    | Int    |
| name                   | String |
| calories               | Int    |
| price                  | number |
| ingredient_photo       | String |
| ingredient_description | String |
