import br.com.dlbca.validation.Validator;
import br.com.dlbca.validation.engine.JavascriptValidatorEngine;
import br.com.dlbca.validation.engine.ValidatorResult;
import br.com.dlbca.validation.factory.ValidatorFactory;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by guilherme on 12/08/14.
 */
public class ValidatorSample {

    public static void main(String[] args) {

        JavascriptValidatorEngine engine = new JavascriptValidatorEngine();
        engine.setPathScript("/validator.js");


        Validator validator = ValidatorFactory.using(engine).create();

        Person person = new Person("Guilherme");
        List<String> constrains = new ArrayList<>();

        ValidatorResult vResult = validator.forData(new Person("Guilherme")).validate(constrains);

        System.out.println(vResult.hasErrors());
    }
}
