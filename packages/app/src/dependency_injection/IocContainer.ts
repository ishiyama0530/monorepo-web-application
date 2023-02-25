import { Container, decorate, injectable } from 'inversify'
import { Controller } from 'tsoa'

const iocContainer = new Container({ autoBindInjectable: true })

decorate(injectable(), Controller) // Makes tsoa's Controller injectable

// export according to convention
export { iocContainer }

import('./configs/Authentication.di')
import('./configs/Common.di')
import('./configs/Ticket.di')
import('./configs/User.di')

// https://tsoa-community.github.io/docs/di.html#inversifyjs
