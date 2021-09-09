import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(formGroup:FormGroup){
    const userName = formGroup.get('userName')?.value ?? '';
    const password = formGroup.get('password')?.value ?? '';

    console.log(userName);
    console.log(password);

    if(userName.trim() + password.trim()){
        return userName !== password ? null:{senhaIgualUsuario: true}

    }else{
        return null;
    }
}