/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "Federation.hpp"
#include "WarpSystem.hpp"

int main() {

    Federation::Ship Independent(150, 230, "Greok");
    WarpSystem::QuantumReactor QR;
    WarpSystem::Core core(&QR);

    Independent.setupCore(&core);
    Independent.checkCore();

    QR.setStability(false);
    Independent.checkCore();

    return 0;
}
