import { useForm } from "react-hook-form";

type TFormTarifProps = {
  children: React.ReactNode;
};

const inputsOptions = [
  { id: 1, label: "Имя", inputName: "name", placeholder: "" },
  { id: 2, label: "Электронная почта", inputName: "email", placeholder: "" },
  {
    id: 3,
    label: "URL Instagram",
    inputName: "url_instagram",
    placeholder: "ссылка",
  },
  {
    id: 4,
    label: "URL Telegram",
    inputName: "url_telegram",
    placeholder: "ссылка",
  },
];

export  function FormTarif({ children }: TFormTarifProps) {
  const { register, handleSubmit } = useForm();

  function submitData(data) {
    console.log(data);
  }

  return (
    <section>
      <div>{children}</div>
      <form onSubmit={handleSubmit(submitData)}>
        <ul>
          {inputsOptions?.map((option) => {
            return (
              <li key={option.id}>
                <label>
                  <span>{option.label}</span>
                  <input
                    type="text"
                    {...register(option.inputName)}
                    placeholder={option?.placeholder}
                  />
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </section>
  );
}
