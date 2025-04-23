-- DROP SCHEMA public;

-- CREATE SCHEMA public AUTHORIZATION pg_database_owner;

-- COMMENT ON SCHEMA public IS 'standard public schema';

-- DROP SEQUENCE public.direcciones_id_direcciones_seq;

CREATE SEQUENCE public.direcciones_id_direcciones_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.direcciones_id_direcciones_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.direcciones_id_direcciones_seq TO pguser;

-- DROP SEQUENCE public.direcciones_id_usuario_seq;

CREATE SEQUENCE public.direcciones_id_usuario_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.direcciones_id_usuario_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.direcciones_id_usuario_seq TO pguser;

-- DROP SEQUENCE public.favoritos_id_favoritos_seq;

CREATE SEQUENCE public.favoritos_id_favoritos_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.favoritos_id_favoritos_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.favoritos_id_favoritos_seq TO pguser;

-- DROP SEQUENCE public.favoritos_id_producto_seq;

CREATE SEQUENCE public.favoritos_id_producto_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.favoritos_id_producto_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.favoritos_id_producto_seq TO pguser;

-- DROP SEQUENCE public.favoritos_id_usuario_seq;

CREATE SEQUENCE public.favoritos_id_usuario_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.favoritos_id_usuario_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.favoritos_id_usuario_seq TO pguser;

-- DROP SEQUENCE public.productos_id_producto_seq;

CREATE SEQUENCE public.productos_id_producto_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.productos_id_producto_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.productos_id_producto_seq TO pguser;

-- DROP SEQUENCE public.productos_id_usuario_seq;

CREATE SEQUENCE public.productos_id_usuario_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.productos_id_usuario_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.productos_id_usuario_seq TO pguser;

-- DROP SEQUENCE public.publicaciones_id_producto_seq;

CREATE SEQUENCE public.publicaciones_id_producto_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.publicaciones_id_producto_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.publicaciones_id_producto_seq TO pguser;

-- DROP SEQUENCE public.publicaciones_id_publicacion_seq;

CREATE SEQUENCE public.publicaciones_id_publicacion_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.publicaciones_id_publicacion_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.publicaciones_id_publicacion_seq TO pguser;

-- DROP SEQUENCE public.publicaciones_id_usuario_seq;

CREATE SEQUENCE public.publicaciones_id_usuario_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.publicaciones_id_usuario_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.publicaciones_id_usuario_seq TO pguser;

-- DROP SEQUENCE public.usuario_id_usuario_seq;

CREATE SEQUENCE public.usuario_id_usuario_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.usuario_id_usuario_seq OWNER TO pguser;
GRANT ALL ON SEQUENCE public.usuario_id_usuario_seq TO pguser;
-- public.usuarios definition

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id_usuario int4 DEFAULT nextval('usuario_id_usuario_seq'::regclass) NOT NULL,
	correo varchar NOT NULL,
	nombre varchar NOT NULL,
	apellidos varchar NULL,
	"password" varchar NOT NULL,
	telefono varchar NULL,
	fecha_de_nac date NULL,
	pais varchar NULL,
	ciudad varchar NULL,
	CONSTRAINT usuario_pk PRIMARY KEY (id_usuario),
	CONSTRAINT usuario_unique UNIQUE (correo)
);

-- Permissions

ALTER TABLE public.usuarios OWNER TO pguser;
GRANT ALL ON TABLE public.usuarios TO pguser;


-- public.direcciones definition

-- Drop table

-- DROP TABLE public.direcciones;

CREATE TABLE public.direcciones (
	id_direcciones serial4 NOT NULL,
	id_usuario serial4 NOT NULL,
	pais varchar NULL,
	ciudad varchar NULL,
	comuna varchar NULL,
	direccion varchar NULL,
	codigo_postal numeric NULL,
	quien_recibe varchar NULL,
	observaciones varchar NULL,
	CONSTRAINT direcciones_pk PRIMARY KEY (id_direcciones),
	CONSTRAINT direcciones_usuario_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.direcciones OWNER TO pguser;
GRANT ALL ON TABLE public.direcciones TO pguser;


-- public.productos definition

-- Drop table

-- DROP TABLE public.productos;

CREATE TABLE public.productos (
	id_producto serial4 NOT NULL,
	id_usuario serial4 NOT NULL,
	producto varchar NULL,
	detalle_producto varchar NULL,
	tipo varchar NULL,
	marca varchar NULL,
	color varchar NULL,
	"date" date NULL,
	descripcion varchar NULL,
	especificaciones varchar NULL,
	uso varchar NULL,
	imagen varchar NULL,
	precio numeric NULL,
	envio varchar NULL,
	CONSTRAINT productos_pk PRIMARY KEY (id_producto),
	CONSTRAINT productos_usuarios_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario)
);

-- Permissions

ALTER TABLE public.productos OWNER TO pguser;
GRANT ALL ON TABLE public.productos TO pguser;


-- public.publicaciones definition

-- Drop table

-- DROP TABLE public.publicaciones;

CREATE TABLE public.publicaciones (
	id_publicacion serial4 NOT NULL,
	id_usuario serial4 NOT NULL,
	id_producto serial4 NOT NULL,
	comentario varchar NOT NULL,
	fecha_comentario date NOT NULL,
	CONSTRAINT publicaciones_pk PRIMARY KEY (id_publicacion),
	CONSTRAINT publicaciones_productos_fk FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto),
	CONSTRAINT publicaciones_usuarios_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.publicaciones OWNER TO pguser;
GRANT ALL ON TABLE public.publicaciones TO pguser;


-- public.favoritos definition

-- Drop table

-- DROP TABLE public.favoritos;

CREATE TABLE public.favoritos (
	id_favoritos serial4 NOT NULL,
	id_producto serial4 NOT NULL,
	id_usuario serial4 NOT NULL,
	CONSTRAINT favoritos_pk PRIMARY KEY (id_favoritos),
	CONSTRAINT favoritos_productos_fk FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto) ON DELETE CASCADE,
	CONSTRAINT favoritos_usuarios_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.favoritos OWNER TO pguser;
GRANT ALL ON TABLE public.favoritos TO pguser;




-- Permissions

GRANT ALL ON SCHEMA public TO pg_database_owner;
GRANT USAGE ON SCHEMA public TO public;

INSERT INTO public.usuarios (id_usuario,correo,nombre,apellidos,"password",telefono,fecha_de_nac,pais,ciudad) VALUES
	 (1,'alfredo.arredondo@gmail.com','Alfredo','Arredondo Vidal','123456','985021134','1978-03-30','Chile','Santiago'),
	 (2,'ch3nux@hotmail.com','Chenu','Poil','123456','994133212','1980-04-20','Chile','Valparaiso');

INSERT INTO public.productos (id_producto,id_usuario,producto,detalle_producto,tipo,marca,color,"date",descripcion,especificaciones,uso,imagen,precio,envio) VALUES
	 (1,1,'Smartphone','Xiaomi Redmi 14 Pro','nuevo','Xiaomi','Negro','2024-01-01','Procesador MediaTek Dimensity 7200 Ultra','Procesador MediaTek Dimensity 7200 Ultra','nuevo',NULL,360000,'Local');

INSERT INTO public.direcciones (id_direcciones,id_usuario,pais,ciudad,comuna,direccion,codigo_postal,quien_recibe,observaciones) VALUES
	 (1,1,'Chile','Santiago','Renca','Rio Rahue 4535',NULL,NULL,'casa esquina con calle El Cerro');

INSERT INTO public.favoritos (id_favoritos,id_producto,id_usuario) VALUES
	 (1,1,1),
	 (2,1,2);

INSERT INTO public.publicaciones (id_publicacion,id_usuario,id_producto,comentario,fecha_comentario) VALUES
	 (1,1,1,'me gusto, muy bueno','2025-02-01');
