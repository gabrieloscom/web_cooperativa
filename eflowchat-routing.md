# Configuración de enrutamiento en eFlow Chat

Los formularios de baja envían mensajes de WhatsApp con un tag al inicio del texto.  
eFlow Chat debe leer ese tag y derivar el mensaje al grupo correspondiente.

## Tags utilizados

| Tipo de baja | Tag en el mensaje | Destino |
|---|---|---|
| Vehículo / Moto | `[BAJA VEHICULO]` | Grupo de vehículos |
| Otros Ramos | `[BAJA OTROS]` | Grupo de otros ramos |

## Ejemplo de mensaje que llega

```
[BAJA VEHICULO]
Hola, quiero solicitar la baja de mi vehículo/moto.

Patente: ABC 123
Fecha de baja: 2026-06-15
Motivo: Venta
```

---

## Pasos sugeridos en eFlow Chat

1. Ir a **Reglas de enrutamiento** (Routing Rules)
2. Crear una nueva regla:
   - **Nombre**: `Baja Vehículo`
   - **Condición**: si el texto del mensaje **comienza con** `[BAJA VEHICULO]`
   - **Acción**: asignar al grupo/agente de vehículos
3. Crear otra regla:
   - **Nombre**: `Baja Otros Ramos`
   - **Condición**: si el texto del mensaje **comienza con** `[BAJA OTROS]`
   - **Acción**: asignar al grupo/agente de otros ramos
4. Asignar las reglas con prioridad alta para que se evalúen antes que reglas genéricas
5. Guardar y probar enviando un formulario desde la web
