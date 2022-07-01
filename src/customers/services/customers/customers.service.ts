import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'danny@gmail.com',
      name: 'danny',
    },
    {
      id: 2,
      email: 'linh@gmail.com',
      name: 'linh',
    },
    {
      id: 3,
      email: 'james@gmail.com',
      name: 'james',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }
  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
  getCustomers() {
    return this.customers;
  }
}
