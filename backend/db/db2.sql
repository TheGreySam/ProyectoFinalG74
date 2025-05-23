PGDMP      8                }         
   prueba_g74    17.4    17.4 X               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false                       1262    16388 
   prueba_g74    DATABASE     �   CREATE DATABASE prueba_g74 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE prueba_g74;
                     postgres    false            �            1259    16414    direcciones    TABLE     G  CREATE TABLE public.direcciones (
    id_direcciones integer NOT NULL,
    id_usuario integer NOT NULL,
    pais character varying,
    ciudad character varying,
    comuna character varying,
    direccion character varying,
    codigo_postal numeric,
    quien_recibe character varying,
    observaciones character varying
);
    DROP TABLE public.direcciones;
       public         heap r       postgres    false            �            1259    16391    direcciones_id_direcciones_seq    SEQUENCE     �   CREATE SEQUENCE public.direcciones_id_direcciones_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 5   DROP SEQUENCE public.direcciones_id_direcciones_seq;
       public               postgres    false            �            1259    16412    direcciones_id_direcciones_seq1    SEQUENCE     �   CREATE SEQUENCE public.direcciones_id_direcciones_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.direcciones_id_direcciones_seq1;
       public               postgres    false    231                       0    0    direcciones_id_direcciones_seq1    SEQUENCE OWNED BY     b   ALTER SEQUENCE public.direcciones_id_direcciones_seq1 OWNED BY public.direcciones.id_direcciones;
          public               postgres    false    229            �            1259    16392    direcciones_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.direcciones_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE public.direcciones_id_usuario_seq;
       public               postgres    false            �            1259    16413    direcciones_id_usuario_seq1    SEQUENCE     �   CREATE SEQUENCE public.direcciones_id_usuario_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.direcciones_id_usuario_seq1;
       public               postgres    false    231                       0    0    direcciones_id_usuario_seq1    SEQUENCE OWNED BY     Z   ALTER SEQUENCE public.direcciones_id_usuario_seq1 OWNED BY public.direcciones.id_usuario;
          public               postgres    false    230            �            1259    16470 	   favoritos    TABLE     �   CREATE TABLE public.favoritos (
    id_favoritos integer NOT NULL,
    id_producto integer NOT NULL,
    id_usuario integer NOT NULL
);
    DROP TABLE public.favoritos;
       public         heap r       postgres    false            �            1259    16393    favoritos_id_favoritos_seq    SEQUENCE     �   CREATE SEQUENCE public.favoritos_id_favoritos_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE public.favoritos_id_favoritos_seq;
       public               postgres    false            �            1259    16467    favoritos_id_favoritos_seq1    SEQUENCE     �   CREATE SEQUENCE public.favoritos_id_favoritos_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.favoritos_id_favoritos_seq1;
       public               postgres    false    242                       0    0    favoritos_id_favoritos_seq1    SEQUENCE OWNED BY     Z   ALTER SEQUENCE public.favoritos_id_favoritos_seq1 OWNED BY public.favoritos.id_favoritos;
          public               postgres    false    239            �            1259    16394    favoritos_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.favoritos_id_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 0   DROP SEQUENCE public.favoritos_id_producto_seq;
       public               postgres    false            �            1259    16468    favoritos_id_producto_seq1    SEQUENCE     �   CREATE SEQUENCE public.favoritos_id_producto_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.favoritos_id_producto_seq1;
       public               postgres    false    242                       0    0    favoritos_id_producto_seq1    SEQUENCE OWNED BY     X   ALTER SEQUENCE public.favoritos_id_producto_seq1 OWNED BY public.favoritos.id_producto;
          public               postgres    false    240            �            1259    16395    favoritos_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.favoritos_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 /   DROP SEQUENCE public.favoritos_id_usuario_seq;
       public               postgres    false            �            1259    16469    favoritos_id_usuario_seq1    SEQUENCE     �   CREATE SEQUENCE public.favoritos_id_usuario_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.favoritos_id_usuario_seq1;
       public               postgres    false    242                       0    0    favoritos_id_usuario_seq1    SEQUENCE OWNED BY     V   ALTER SEQUENCE public.favoritos_id_usuario_seq1 OWNED BY public.favoritos.id_usuario;
          public               postgres    false    241            �            1259    16430 	   productos    TABLE     $  CREATE TABLE public.productos (
    id_producto integer NOT NULL,
    id_usuario integer NOT NULL,
    producto character varying,
    detalle_producto character varying,
    tipo character varying,
    marca character varying,
    color character varying,
    date date,
    descripcion character varying,
    especificaciones character varying,
    uso character varying,
    imagen character varying,
    precio numeric,
    envio character varying,
    stock integer DEFAULT 0,
    precio_anterior numeric,
    es_nuevo boolean DEFAULT true
);
    DROP TABLE public.productos;
       public         heap r       postgres    false            �            1259    16396    productos_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_id_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 0   DROP SEQUENCE public.productos_id_producto_seq;
       public               postgres    false            �            1259    16428    productos_id_producto_seq1    SEQUENCE     �   CREATE SEQUENCE public.productos_id_producto_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.productos_id_producto_seq1;
       public               postgres    false    234                       0    0    productos_id_producto_seq1    SEQUENCE OWNED BY     X   ALTER SEQUENCE public.productos_id_producto_seq1 OWNED BY public.productos.id_producto;
          public               postgres    false    232            �            1259    16397    productos_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 /   DROP SEQUENCE public.productos_id_usuario_seq;
       public               postgres    false            �            1259    16429    productos_id_usuario_seq1    SEQUENCE     �   CREATE SEQUENCE public.productos_id_usuario_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.productos_id_usuario_seq1;
       public               postgres    false    234                       0    0    productos_id_usuario_seq1    SEQUENCE OWNED BY     V   ALTER SEQUENCE public.productos_id_usuario_seq1 OWNED BY public.productos.id_usuario;
          public               postgres    false    233            �            1259    16447    publicaciones    TABLE     �   CREATE TABLE public.publicaciones (
    id_publicacion integer NOT NULL,
    id_usuario integer NOT NULL,
    id_producto integer NOT NULL,
    comentario character varying NOT NULL,
    fecha_comentario date NOT NULL
);
 !   DROP TABLE public.publicaciones;
       public         heap r       postgres    false            �            1259    16398    publicaciones_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.publicaciones_id_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 4   DROP SEQUENCE public.publicaciones_id_producto_seq;
       public               postgres    false            �            1259    16446    publicaciones_id_producto_seq1    SEQUENCE     �   CREATE SEQUENCE public.publicaciones_id_producto_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.publicaciones_id_producto_seq1;
       public               postgres    false    238                       0    0    publicaciones_id_producto_seq1    SEQUENCE OWNED BY     `   ALTER SEQUENCE public.publicaciones_id_producto_seq1 OWNED BY public.publicaciones.id_producto;
          public               postgres    false    237            �            1259    16399     publicaciones_id_publicacion_seq    SEQUENCE     �   CREATE SEQUENCE public.publicaciones_id_publicacion_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 7   DROP SEQUENCE public.publicaciones_id_publicacion_seq;
       public               postgres    false            �            1259    16444 !   publicaciones_id_publicacion_seq1    SEQUENCE     �   CREATE SEQUENCE public.publicaciones_id_publicacion_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.publicaciones_id_publicacion_seq1;
       public               postgres    false    238                       0    0 !   publicaciones_id_publicacion_seq1    SEQUENCE OWNED BY     f   ALTER SEQUENCE public.publicaciones_id_publicacion_seq1 OWNED BY public.publicaciones.id_publicacion;
          public               postgres    false    235            �            1259    16400    publicaciones_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.publicaciones_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 3   DROP SEQUENCE public.publicaciones_id_usuario_seq;
       public               postgres    false            �            1259    16445    publicaciones_id_usuario_seq1    SEQUENCE     �   CREATE SEQUENCE public.publicaciones_id_usuario_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.publicaciones_id_usuario_seq1;
       public               postgres    false    238                       0    0    publicaciones_id_usuario_seq1    SEQUENCE OWNED BY     ^   ALTER SEQUENCE public.publicaciones_id_usuario_seq1 OWNED BY public.publicaciones.id_usuario;
          public               postgres    false    236            �            1259    16401    usuario_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 -   DROP SEQUENCE public.usuario_id_usuario_seq;
       public               postgres    false            �            1259    16402    usuarios    TABLE     �  CREATE TABLE public.usuarios (
    id_usuario integer DEFAULT nextval('public.usuario_id_usuario_seq'::regclass) NOT NULL,
    correo character varying NOT NULL,
    nombre character varying NOT NULL,
    apellidos character varying,
    password character varying NOT NULL,
    telefono character varying,
    fecha_de_nac date,
    pais character varying,
    ciudad character varying
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false    227            F           2604    16417    direcciones id_direcciones    DEFAULT     �   ALTER TABLE ONLY public.direcciones ALTER COLUMN id_direcciones SET DEFAULT nextval('public.direcciones_id_direcciones_seq1'::regclass);
 I   ALTER TABLE public.direcciones ALTER COLUMN id_direcciones DROP DEFAULT;
       public               postgres    false    231    229    231            G           2604    16418    direcciones id_usuario    DEFAULT     �   ALTER TABLE ONLY public.direcciones ALTER COLUMN id_usuario SET DEFAULT nextval('public.direcciones_id_usuario_seq1'::regclass);
 E   ALTER TABLE public.direcciones ALTER COLUMN id_usuario DROP DEFAULT;
       public               postgres    false    230    231    231            O           2604    16473    favoritos id_favoritos    DEFAULT     �   ALTER TABLE ONLY public.favoritos ALTER COLUMN id_favoritos SET DEFAULT nextval('public.favoritos_id_favoritos_seq1'::regclass);
 E   ALTER TABLE public.favoritos ALTER COLUMN id_favoritos DROP DEFAULT;
       public               postgres    false    239    242    242            P           2604    16474    favoritos id_producto    DEFAULT        ALTER TABLE ONLY public.favoritos ALTER COLUMN id_producto SET DEFAULT nextval('public.favoritos_id_producto_seq1'::regclass);
 D   ALTER TABLE public.favoritos ALTER COLUMN id_producto DROP DEFAULT;
       public               postgres    false    240    242    242            Q           2604    16475    favoritos id_usuario    DEFAULT     }   ALTER TABLE ONLY public.favoritos ALTER COLUMN id_usuario SET DEFAULT nextval('public.favoritos_id_usuario_seq1'::regclass);
 C   ALTER TABLE public.favoritos ALTER COLUMN id_usuario DROP DEFAULT;
       public               postgres    false    241    242    242            H           2604    16433    productos id_producto    DEFAULT        ALTER TABLE ONLY public.productos ALTER COLUMN id_producto SET DEFAULT nextval('public.productos_id_producto_seq1'::regclass);
 D   ALTER TABLE public.productos ALTER COLUMN id_producto DROP DEFAULT;
       public               postgres    false    234    232    234            I           2604    16434    productos id_usuario    DEFAULT     }   ALTER TABLE ONLY public.productos ALTER COLUMN id_usuario SET DEFAULT nextval('public.productos_id_usuario_seq1'::regclass);
 C   ALTER TABLE public.productos ALTER COLUMN id_usuario DROP DEFAULT;
       public               postgres    false    234    233    234            L           2604    16450    publicaciones id_publicacion    DEFAULT     �   ALTER TABLE ONLY public.publicaciones ALTER COLUMN id_publicacion SET DEFAULT nextval('public.publicaciones_id_publicacion_seq1'::regclass);
 K   ALTER TABLE public.publicaciones ALTER COLUMN id_publicacion DROP DEFAULT;
       public               postgres    false    235    238    238            M           2604    16451    publicaciones id_usuario    DEFAULT     �   ALTER TABLE ONLY public.publicaciones ALTER COLUMN id_usuario SET DEFAULT nextval('public.publicaciones_id_usuario_seq1'::regclass);
 G   ALTER TABLE public.publicaciones ALTER COLUMN id_usuario DROP DEFAULT;
       public               postgres    false    238    236    238            N           2604    16452    publicaciones id_producto    DEFAULT     �   ALTER TABLE ONLY public.publicaciones ALTER COLUMN id_producto SET DEFAULT nextval('public.publicaciones_id_producto_seq1'::regclass);
 H   ALTER TABLE public.publicaciones ALTER COLUMN id_producto DROP DEFAULT;
       public               postgres    false    237    238    238                      0    16414    direcciones 
   TABLE DATA           �   COPY public.direcciones (id_direcciones, id_usuario, pais, ciudad, comuna, direccion, codigo_postal, quien_recibe, observaciones) FROM stdin;
    public               postgres    false    231   mm                 0    16470 	   favoritos 
   TABLE DATA           J   COPY public.favoritos (id_favoritos, id_producto, id_usuario) FROM stdin;
    public               postgres    false    242   �m                 0    16430 	   productos 
   TABLE DATA           �   COPY public.productos (id_producto, id_usuario, producto, detalle_producto, tipo, marca, color, date, descripcion, especificaciones, uso, imagen, precio, envio, stock, precio_anterior, es_nuevo) FROM stdin;
    public               postgres    false    234   �m       
          0    16447    publicaciones 
   TABLE DATA           n   COPY public.publicaciones (id_publicacion, id_usuario, id_producto, comentario, fecha_comentario) FROM stdin;
    public               postgres    false    238   �n                  0    16402    usuarios 
   TABLE DATA           y   COPY public.usuarios (id_usuario, correo, nombre, apellidos, password, telefono, fecha_de_nac, pais, ciudad) FROM stdin;
    public               postgres    false    228   �n                  0    0    direcciones_id_direcciones_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.direcciones_id_direcciones_seq', 1, false);
          public               postgres    false    217                        0    0    direcciones_id_direcciones_seq1    SEQUENCE SET     N   SELECT pg_catalog.setval('public.direcciones_id_direcciones_seq1', 1, false);
          public               postgres    false    229            !           0    0    direcciones_id_usuario_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.direcciones_id_usuario_seq', 1, false);
          public               postgres    false    218            "           0    0    direcciones_id_usuario_seq1    SEQUENCE SET     J   SELECT pg_catalog.setval('public.direcciones_id_usuario_seq1', 1, false);
          public               postgres    false    230            #           0    0    favoritos_id_favoritos_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.favoritos_id_favoritos_seq', 1, false);
          public               postgres    false    219            $           0    0    favoritos_id_favoritos_seq1    SEQUENCE SET     J   SELECT pg_catalog.setval('public.favoritos_id_favoritos_seq1', 1, false);
          public               postgres    false    239            %           0    0    favoritos_id_producto_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.favoritos_id_producto_seq', 1, false);
          public               postgres    false    220            &           0    0    favoritos_id_producto_seq1    SEQUENCE SET     I   SELECT pg_catalog.setval('public.favoritos_id_producto_seq1', 1, false);
          public               postgres    false    240            '           0    0    favoritos_id_usuario_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.favoritos_id_usuario_seq', 1, false);
          public               postgres    false    221            (           0    0    favoritos_id_usuario_seq1    SEQUENCE SET     H   SELECT pg_catalog.setval('public.favoritos_id_usuario_seq1', 1, false);
          public               postgres    false    241            )           0    0    productos_id_producto_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.productos_id_producto_seq', 1, false);
          public               postgres    false    222            *           0    0    productos_id_producto_seq1    SEQUENCE SET     I   SELECT pg_catalog.setval('public.productos_id_producto_seq1', 1, false);
          public               postgres    false    232            +           0    0    productos_id_usuario_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.productos_id_usuario_seq', 1, false);
          public               postgres    false    223            ,           0    0    productos_id_usuario_seq1    SEQUENCE SET     H   SELECT pg_catalog.setval('public.productos_id_usuario_seq1', 1, false);
          public               postgres    false    233            -           0    0    publicaciones_id_producto_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.publicaciones_id_producto_seq', 1, false);
          public               postgres    false    224            .           0    0    publicaciones_id_producto_seq1    SEQUENCE SET     M   SELECT pg_catalog.setval('public.publicaciones_id_producto_seq1', 1, false);
          public               postgres    false    237            /           0    0     publicaciones_id_publicacion_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.publicaciones_id_publicacion_seq', 1, false);
          public               postgres    false    225            0           0    0 !   publicaciones_id_publicacion_seq1    SEQUENCE SET     P   SELECT pg_catalog.setval('public.publicaciones_id_publicacion_seq1', 1, false);
          public               postgres    false    235            1           0    0    publicaciones_id_usuario_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.publicaciones_id_usuario_seq', 1, false);
          public               postgres    false    226            2           0    0    publicaciones_id_usuario_seq1    SEQUENCE SET     L   SELECT pg_catalog.setval('public.publicaciones_id_usuario_seq1', 1, false);
          public               postgres    false    236            3           0    0    usuario_id_usuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 1, false);
          public               postgres    false    227            W           2606    16422    direcciones direcciones_pk 
   CONSTRAINT     d   ALTER TABLE ONLY public.direcciones
    ADD CONSTRAINT direcciones_pk PRIMARY KEY (id_direcciones);
 D   ALTER TABLE ONLY public.direcciones DROP CONSTRAINT direcciones_pk;
       public                 postgres    false    231            ]           2606    16477    favoritos favoritos_pk 
   CONSTRAINT     ^   ALTER TABLE ONLY public.favoritos
    ADD CONSTRAINT favoritos_pk PRIMARY KEY (id_favoritos);
 @   ALTER TABLE ONLY public.favoritos DROP CONSTRAINT favoritos_pk;
       public                 postgres    false    242            Y           2606    16438    productos productos_pk 
   CONSTRAINT     ]   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pk PRIMARY KEY (id_producto);
 @   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pk;
       public                 postgres    false    234            [           2606    16456    publicaciones publicaciones_pk 
   CONSTRAINT     h   ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_pk PRIMARY KEY (id_publicacion);
 H   ALTER TABLE ONLY public.publicaciones DROP CONSTRAINT publicaciones_pk;
       public                 postgres    false    238            S           2606    16409    usuarios usuario_pk 
   CONSTRAINT     Y   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuario_pk PRIMARY KEY (id_usuario);
 =   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuario_pk;
       public                 postgres    false    228            U           2606    16411    usuarios usuario_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuario_unique UNIQUE (correo);
 A   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuario_unique;
       public                 postgres    false    228            ^           2606    16423 "   direcciones direcciones_usuario_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.direcciones
    ADD CONSTRAINT direcciones_usuario_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.direcciones DROP CONSTRAINT direcciones_usuario_fk;
       public               postgres    false    228    231    4691            b           2606    16478     favoritos favoritos_productos_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.favoritos
    ADD CONSTRAINT favoritos_productos_fk FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.favoritos DROP CONSTRAINT favoritos_productos_fk;
       public               postgres    false    234    242    4697            c           2606    16483    favoritos favoritos_usuarios_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.favoritos
    ADD CONSTRAINT favoritos_usuarios_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.favoritos DROP CONSTRAINT favoritos_usuarios_fk;
       public               postgres    false    4691    228    242            _           2606    16439    productos productos_usuarios_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_usuarios_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);
 I   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_usuarios_fk;
       public               postgres    false    228    4691    234            `           2606    16457 (   publicaciones publicaciones_productos_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_productos_fk FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);
 R   ALTER TABLE ONLY public.publicaciones DROP CONSTRAINT publicaciones_productos_fk;
       public               postgres    false    4697    234    238            a           2606    16462 '   publicaciones publicaciones_usuarios_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_usuarios_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.publicaciones DROP CONSTRAINT publicaciones_usuarios_fk;
       public               postgres    false    238    228    4691               V   x��A
� ��x�9A �	�m۶�Ȑ��������)5��U܍��J�8�L�-����1�2���[�3��8J��]�s�#             x�3�4�4�2�F\1z\\\ 	         �   x����
�0��ۧ��Mj��٣����vI�m6$Q��MU��,���|$����"�������ʊm=���>lP'�eŅL)�`P-y��֨^��h��6+�`�>z������¢(B$�4�Ϋ�E�������~D�"rYq��:wV�d*���Ճ����|. f�<˲'x�V;      
   0   x�3�4��T����|���J���Լ|N##S]#]C�=... ��
T          �   x�E�A�0@���^���)
;01a�fH�����x|5]��O�[�F)8�Fi�C,Y��>h�w���В+�PW���� �S�i2��'�pZϢ,���l��?��S��,�O��,�7Um��;�s�s��u-�R/n 4      