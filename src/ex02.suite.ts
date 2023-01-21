/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 02', () => {

    let sources: Path[]

    beforeAll(async () => {
        sources = await Path.fromProject().glob('*.cpp')
    })

    test('Independent Ship', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex02/independent_ship.cpp')
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
            'move(2, EARTH): false',
            'move(0, EARTH): true',
            'move(EARTH): false',
            'move(VULCAN): true',
            'move without stability: false',
            'move with stability: true',
            ''
        ])
    })

    test('Starfleet Ship', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex02/starfleet_ship.cpp')
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
            'move(10, VULCAN): false',
            'move(0, VULCAN): true',
            'move(VULCAN): false',
            'move(EARTH): true',
            'move without stability: false',
            'move with stability: true',
            ''
        ])
    })

    test('Borg Ship', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex02/borg_ship.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject().toString()}`,
            `-I${Path.fromMoulinette('./res/headers').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'We are the Borgs. Lower your shields and surrender yourselves unconditionally.',
            'Your biological characteristics and technologies will be assimilated.',
            'Resistance is futile.',
            'move(10, JUPITER): false',
            'move(0, JUPITER): true',
            'move(JUPITER): false',
            'move(ROMULUS): true',
            'move without stability: false',
            'move with stability: true',
            ''
        ])
    })

})
