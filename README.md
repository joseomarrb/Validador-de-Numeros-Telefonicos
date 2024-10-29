# Validador de Números Telefónicos Estadounidenses
Este proyecto fue creado para hacer un proyecto de freeCodeCamp en el que tengo que validar los números telefonicos con las reglas que me pones
mediante lo que ya he aprendido practicando con sus ejercicios anteriormente.

## Reglas del Proyecto
[![Captura-de-pantalla-20.png](https://i.postimg.cc/d36SHjMc/Captura-de-pantalla-20.png)](https://postimg.cc/rRdJzWFf)

1. Debe tener un elemento de entrada con un id de ***"user-input"***.

2. Debe tener un elemento de botón con un id de ***"check-btn"***.

3. Debe tener un elemento de botón con un id de ***"clear-btn"***.

4. Debe tener un elemento *div, span o p* con un id de ***"results-div"***.

5. Cuando hace clic en el elemento ***#check-btn*** sin ingresar un valor en el elemento ***#user-input***, 
debe aparecer una alerta con el texto ***"Por favor, proporcione un número de teléfono"***.

6. Cuando hace clic en el elemento ***#clear-btn***, se debe eliminar el contenido dentro del elemento ***#results-div***.

7. Cuando el elemento ***#user-input*** contiene ***1 555-555-5555*** y se hace clic en el elemento ***#check-btn***,
 el elemento ***#results-div*** debe contener el texto ***"Número válido de EE. UU.: 1 555-555-5555"***.

8. Cuando el elemento ***#user-input*** contiene 1 (555) 555-5555 y se hace clic en el elemento ***#check-btn***, el elemento 
***#results-div*** debe contener el texto ***"Número válido de EE. UU.: 1 (555) 555-5555"***.

9. Cuando el elemento ***#user-input*** contiene 5555555555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número válido de EE. UU.: 5 ...5*** y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div*** 
debe contener el texto ***"Número válido de EE. UU.: 5555555555"***

10. El elemento ***#user-input*** contiene 555-555-5555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número válido de EE. UU.: 555-555-5555"***.

11. Cuando el elemento ***#user-input*** contiene (555)555-5555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número válido de EE. UU.: (555)555-5555"***

12. Cuando el elemento ***#user-input*** contiene 1(555)555-5555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número válido de EE. UU.: 1(555)555-5555"***

13. Cuando el elemento ***#user-input*** contiene 555-5555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 555-5555"***

14. Cuando el elemento ***#user-input*** contiene 5555555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 5555555"***

15. Cuando el elemento ***#user-input*** contiene 1 555)555-5555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 1 555)555-5555"***.

16. Cuando el elemento ***#user-input*** contiene 1 555 555 5555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número válido de EE. UU.: 1 555 555 5555"***.

17. Cuando el elemento ***#user-input*** contiene 1 456 789 4444 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número válido de EE. UU.: 1 456 789 4444"***.

18. Cuando ***#user-input*** contiene 123**&!!asdf# y se hace clic en ***#check-btn, #results-div*** debe contener el texto ***"Número no válido de EE. UU.: 123**&!!asdf#"***

19. Cuando el elemento ***#user-inpu***t contiene 55555555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número no válido de EE. UU.: 55555555"***

20. Cuando el elemento ***#user-input*** contiene (6054756961) y el elemento ***#check-btn*** es Al hacer clic, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: (6054756961)"***

21. Cuando el elemento ***#user-input*** contiene 2 (757) 622-7382 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 2 (757) 622-7382"***

22. Cuando el elemento ***#user-input*** contiene 0 (757) 622-7382 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 0 (757) 622-7382"***

23. Cuando el elemento ***#user-input*** contiene -1 (757) 622-7382 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: -1 (757) 622-7382"***

24. Cuando el elemento ***#user-input*** contiene 2 757 622-7382 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 2 757 622-7382"***

25. Cuando el elemento ***#user-input*** contiene 10 (757) 622-7382 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 10 (757) 622-7382"***

26. Cuando el elemento ***#user-input*** contiene 27576227382 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 27576227382"***

27. Cuando el elemento ***#user-input*** contiene (275)76227382 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: (275)76227382"***

28. Cuando el elemento ***#user-input*** contiene 2(757)6227382 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div*** 
debe contener el texto ***"Número de EE. UU. no válido: 2(757)6227382"***

29. Cuando el elemento ***#user-input*** contiene 2(757)622-7382 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div*** 
debe contener el texto ***"Número de EE. UU. no válido: 2(757)622-7382"***

30. Cuando el elemento ***#user-input*** contiene 555)-555-5555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 555)-555-5555"***

31. Cuando el El elemento ***#user-input*** contiene (555-555-5555 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: (555-555-5555"***

32. Cuando ***#user-input*** contiene (555)5(55?)-5555 y se hace clic en ***#check-btn, #results-div*** debe contener el texto 
***"Número de EE. UU. no válido: (555)5(55?)-5555"***

33. Cuando el elemento ***#user-input*** contiene 55 55-55-555-5 y se hace clic en el elemento ***#check-btn***, el elemento ***#results-div*** debe contener el texto
 ***"Número de EE. UU. no válido: 55 55-55-555-5"***

34. Cuando el elemento ***#user-input*** contiene 11 555-555-5555 y se hace clic en el elemento ***#check-btn***, El elemento ***#results-div***
 debe contener el texto ***"Número de EE. UU. no válido: 11 555-555-5555"***

Cumpla con las historias de usuario y apruebe todas las pruebas a continuación
para completar este proyecto. Déle su propio estilo personal. ¡Feliz codificación!
