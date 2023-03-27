# Lambda Supplier AWS
Lambda para la creación de proveedores.

## Aquitectura
![Arquitectura](Arquitectura.png)

## Instalación
Instalar paquetes de node
```bash
npm install
```
Instalar lambda-local de forma global para prueba en ambiente local (opcional)
```bash
npm install -g lambda-local
```
## Basedatos
```sql
CREATE TABLE `supplier` (
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
```sql
CREATE PROCEDURE `sp_supplier_create`(in p_name varchar(255),in p_email varchar(100))
begin
	INSERT INTO supplier (name, email) VALUES(p_name,p_email);
END;
```

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)