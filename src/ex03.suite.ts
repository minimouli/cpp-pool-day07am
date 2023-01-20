/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 03', () => {

    let sources: Path[]

    beforeAll(async () => {
        sources = await Path.fromProject().glob('*.cpp')
    })

    test('This is war', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex03/main.cpp')
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
            'Weapons are set: 20 torpedoes ready.',
            'The independent ship Greok just finished its construction.',
            'It is 150 m in length and 230 m in width.',
            'We are the Borgs. Lower your shields and surrender yourselves unconditionally.',
            'Your biological characteristics and technologies will be assimilated.',
            'Resistance is futile.',
            'USS Kreog: The core is set.',
            'USS Kreog: The core is stable at the time.',
            'Greok: The core is set.',
            'Greok: The core is stable at the time.',
            'Kreog: Firing on target. 17 torpedoes remaining.',
            'Firing on target with 20GW frequency.',
            'Firing on target with 20GW frequency.',
            'USS Kreog: The core is stable at the time.',
            'Greok: The core is unstable at the time.',
            ''
        ])
    })

})
