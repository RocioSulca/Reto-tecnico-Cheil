import InputText from '../../atoms/input'
import {Validation} from '../../../utils/validations'
import './index.scss'

const SectionInput = ({ control }) => {
  return (
    <section className='container__input'>
      <InputText
        control={control}
        name="payment"
        placeholder="BP88-245030"
        label="Nro de Comprobante de Pago (*)"
        rules={{
          required: Validation.payment,
        }}
      />
      <InputText
        control={control}
        name="name"
        label="Nombres (*)"
        rules={{
          required: 'El nombre es obligatorio',
        }}
      />
      <InputText
        control={control}
        name="lastname"
        label="Apellidos (*)"
        rules={{
          required: 'El apellido es obligatorio',
        }}
      />
      <InputText
        control={control}
        name="dni"
        label="DNI / Carnet de extranjería (*)"
        rules={{
          required: 'El nro. de documento es obligatorio',
        }}
      />
      <InputText
        control={control}
        name="email"
        label="Correo Electrónico (*)"
        rules={{
          required: 'El correo electrónico es obligatorio',
          validate: {
            validEmail: (value) => {
              const isValidEmail = /\S+@\S+\.\S+/.test(value)
              return isValidEmail || 'Ingresa un correo electrónico válido.'
            }
          }
        }}
      />
      <InputText
        control={control}
        name="phone"
        label="Número de contacto (*)"
        rules={{
          required: 'El nro. de teléfono es obligatorio',
          validate: {
            validNumber: (value) => {
              const isValidNumber = /^[0-9]{7,}$/.test(value);
              return isValidNumber || 'El número de celular debe tener mínimo 7 dígitos ';
            }
          }
        }}
      />
    </section>
  )
}

export default SectionInput