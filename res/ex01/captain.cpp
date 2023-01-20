/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <iostream>
#include "Federation.hpp"
#include "WarpSystem.hpp"

int main() {

    Federation::Starfleet::Ship UssKreog(289, 132, "Kreog", 6);
    Federation::Starfleet::Captain James("James T. Kirk");

    James.setAge(42);

    std::cout << "The captain " << James.getName() << " is " << std::to_string(James.getAge()) << " years old." << std::endl;

    UssKreog.promote(&James);

    return 0;
}
