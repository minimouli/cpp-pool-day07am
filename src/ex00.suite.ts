/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 00', () => {

    let sources: Path[]

    beforeAll(async () => {
        sources = await Path.fromProject().glob('*.cpp')
    })

    test('Independent Ship', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex00/independent_ship.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject().toString()}`,
            `-I${Path.fromMoulinette('./res/headers').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'The independent ship Greok just finished its construction.',
            'It is 150 m in length and 230 m in width.',
            'Greok: The core is set.',
            'Greok: The core is stable at the time.',
            'Greok: The core is unstable at the time.',
            ''
        ])
    })

    test('Starfleet Ship', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex00/starfleet_ship.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject().toString()}`,
            `-I${Path.fromMoulinette('./res/headers').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'The ship USS Kreog has been finished.',
            'It is 289 m in length and 132 m in width.',
            'It can go to Warp 6!',
            'USS Kreog: The core is set.',
            'USS Kreog: The core is stable at the time.',
            'USS Kreog: The core is unstable at the time.',
            ''
        ])
    })

})
