
using System;

namespace Institucion
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("GESTIÓN DE INSTITUCIÓN");
            // var alumno1 = new Almuno();
			//alumno1.Id = 1;
			//alumno1.Nombre = "Juan Carlos";
			var alumno1 = new Alumno() { 
                Id=1, 
                Nombre="Cristian", 
                Apellido="Franco", 
                Edad=24, 
                Teléfono="2970450",
                Email= "cfrancobedoya@gmail.com"
            };

            var profesor1 = new Profesor()
            {
				Id = 2,
				Nombre = "Sebastian",
				Apellido = "Franco",
				Edad = 28,
				Teléfono = "2970450",
                Catedra = "Programación"
            };

            Persona a = profesor1;
            Persona b = alumno1;

            a = b;

            //Alumno al3 = a;   //No se puede asignar

            Console.WriteLine(Persona.ContadorPersonas);

            Console.ReadLine();
        }
    }
}
