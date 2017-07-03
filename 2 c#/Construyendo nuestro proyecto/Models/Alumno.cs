﻿using System;
namespace Institucion
{
    public class Alumno: Persona
    {        
        public string Email { get; set; }  


        public string ListaInasistencias()
        {
            return Inasistencias.ToString();
        }
    }
}
