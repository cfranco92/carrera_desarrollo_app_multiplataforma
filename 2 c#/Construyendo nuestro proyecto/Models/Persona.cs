﻿using System;
namespace Institucion
{
    public class Persona
    {        
        public int Id { get; set;}
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public short Edad { get; set; }
        public string Teléfono { get; set; }
        public string NombreCompleto{ 
            get{
                return $"{Nombre} {Apellido}";
            }
        }
    }
}
