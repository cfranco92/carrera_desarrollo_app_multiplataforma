﻿using System;
namespace Institucion
{
    public class Persona
    {
        public static int ContadorPersonas = 0;

        public int Id { get; set;}
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public short Edad { get; set; }
        public string Teléfono { get; set; }
        protected int Inasistencias { get; set; }

        public string NombreCompleto{ 
            get{
                return $"{Nombre} {Apellido}";
            }
        }

        public Persona()
        {
            ContadorPersonas++;
        }
    }
}
