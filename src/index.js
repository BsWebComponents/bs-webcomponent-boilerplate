'use strict'

import {Slim} from 'slim-js'
import {tag, useShadow, template} from 'slim-js/Decorators'

@tag('BsComponent')
@useShadow(true)
@template(require('./templates/index.tpl.html'))
class BsComponent extends Slim {
    
}

export default BsComponent
